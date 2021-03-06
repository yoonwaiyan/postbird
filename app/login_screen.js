global.LoginScreen = jClass.extend({
  type: "login_screen",

  init: function () {
    this.content = App.renderView('home');
    this.form = this.content.find('form');
    this.connections = this.content.find('ul.connections');

    this.bindFormEvents();

    this.fillSavedConnections();
    if (this.connections.find('li:first').length) {
      this.connections.find('li:first').click();
    } else {
      this.fillForm(null, {user: process.env.USER});
    }

    this.initEvents(this.content);
  },

  bindFormEvents: function () {
    this.form.bind('submit', this.onFormSubmit.bind(this));

    this.form.find('input[type=text], input[type=password]').bind('keypress', function(event) {
      if (event.keyIdentifier == "Enter") {
        $u.stopEvent(event);
        this.onFormSubmit(event);
      }
    }.bind(this));

    this.form.find('input[type=text], input[type=password]').bind('focus', function(event) {
      this.formChanged(event);
    }.bind(this));

    this.form.find('input[type=text], input[type=password]').bind('keyup', this.formChanged.bind(this));

    this.content.find('a.go-to-help').bind('click', function() {
      var help = HelpScreen.open();
      help.activatePage("get-postgres");
    });
  },

  showPart: function (name) {
    this.content.find('.middle-window').hide();
    this.content.find('.middle-window.' + name).show();
  },

  showPlainPane: function() {
    this.content.find('.login-with-password').hide();
    this.content.find('.login-with-heroku').show();
    this.showPart('plain');
  },

  showHerokuPane1: function () {
    this.content.find('.login-with-password').show();
    this.content.find('.login-with-heroku').hide();
    this.showPart('heroku-1');
  },

  showHerokuOAuthPane: function () {
    this.showPart('heroku-oauth');
  },

  showHerokuCLPane: function () {
    this.showPart('heroku-cl');
  },

  startHerokuOAuth: function () {
    this.showHerokuOAuthPane();
    var steps = this.content.find('.heroku-oauth ul.steps');
    var options = {
      onAccessTokenStart:  function() { steps.find('.access-token').addClass('started'); },
      onAccessTokenDone:   function() { steps.find('.access-token').addClass('done'); },
      onRequestTokenStart: function() { steps.find('.request-token').addClass('started'); },
      onRequestTokenDone:  function() { steps.find('.request-token').addClass('done'); },
      onGetAppsStarted:    function() { steps.find('.get-apps').addClass('started'); },
      onGetAppsDone:       function() { steps.find('.get-apps').addClass('done'); }
    };

    var appsList = this.content.find('ul.apps');
    HerokuClient.authAndGetApps(function(apps) {
      apps.forEach(function(app) {
        var appEl = $dom(['li', ['span', app.name], ['button', 'Connect'], {'app-name': app.name}]);
        appsList.append(appEl);
        $u(appEl).find('button').bind('click', function (event) {
          event.preventDefault();
          this.connectToHeroku(app);
        }.bind(this));
      }.bind(this));
    }.bind(this), options);
  },

  connectToHeroku: function (heroku_app) {
    App.startLoading("Fetching config...");
    HerokuClient.getDatabaseUrl(heroku_app.id, function(db_url) {
      if (!db_url) {
        window.alertify.alert("Seems like app <b>" + heroku_app.name + "</b> don't have database");
        App.stopLoading();
        return;
      }
      db_url = db_url + "?ssl=true";
      console.log('connecting to', db_url);
      this.makeConnection(db_url, {fetchDbList: false, name: heroku_app.name}, function(tab) {
        if (tab) {
          tab.instance.switchToHerokuMode(heroku_app.name, db_url);
        }
        console.log('connected to heroku');
      });
    }.bind(this));
  },

  openHerokuLoginWindow: function(link) {
    HerokuClient.auth(function() {
      console.log("authenticated");
    });
  },

  fillSavedConnections: function () {
    this.connections.empty();
    var data = Model.SavedConn.savedConnections();
    var currentConnection = this.connectionName;

    var _this = this;
    Object.forEach(data, function (name, params) {
      var line = $dom(['li', name]);

      $u.contextMenu(line, {
        "Fill form with ...": _this.fillForm.bind(_this, name, params),
        "Connect": function () {
          _this.fillForm(params, name);
          _this.onFormSubmit();
        },
        'separator': 'separator',
        "Rename": _this.renameConnection.bind(_this, name),
        "Delete": _this.deleteConnection.bind(_this, name)
      });

      if (name == currentConnection) {
        $u(line).addClass('selected');
      }

      $u(line).single_double_click_nowait(function(e) {
        _this.connectionSelected(name, params, line);
      }, function (e) {
        _this.connectionSelected(name, params, line);
        _this.onFormSubmit(e);
      });

      _this.connections.append(line)
    });
  },

  connectionSelected: function (name, params, line) {
    this.connections.find('.selected').removeClass('selected');
    $u(line).addClass('selected');
    this.connectionName = name;
    this.fillForm(name, params);
    this.setButtonShown(false);
  },

  testConnection: function () {
    App.startLoading("Connecting...");

    var options = this.getFormData();
    var conn = new Connection(options, function (status, message) {
      App.stopLoading();
      if (status) {
        window.alertify.alert("Successfully connected!");
        conn.close();
      } else {
        window.alertify.alert(this.humanErrorMessage(message));
      }
    }.bind(this));
  },

  addNewConnection: function () {
    this.connectionName = "**new**";
    this.fillForm(undefined, {host: "localhost", user: "", password: "", database: ""});
    this.form.find('[name=host]').focus();
    this.setButtonShown(true);
  },

  fillForm: function (name, params) {
    params = node.util._extend({host: "localhost", user: "", password: "", database: "", query: ""}, params);
    var v;
    for (var k in params) { v = params[k];
      this.form.find('input[name=' + k + ']').val(v);
    }
  },

  renameConnection: function (name) {
    window.alertify.prompt("Rename connection?", function (confirm, newName) {
      if (confirm) {
        Model.SavedConn.renameConnection(name, newName);
        this.fillSavedConnections();
      }
    }.bind(this), name);
  },

  deleteConnection: function (name) {
    window.alertify.labels.ok = "Remove";
    window.alertify.confirm("Remove connection " + name + "?", function (res) {
      window.alertify.labels.ok = "OK";
      if (res) {
        Model.SavedConn.removeConnection(name);
        this.fillSavedConnections();
      }
    }.bind(this));
  },

  saveAndConnect: function (e) {
    $u.stopEvent(e);
    var name;

    if (this.connectionName) {
      name = this.connectionName;
    } else {
      var data = Model.SavedConn.savedConnections();
      var host = this.form.find('[name=host]').val();
      var name = host;
      var i = 1;
      while (data[name]) {
        i += 1;
        name = host + ' #' + i;
      }
    }

    this.connectionName = name;
    this.onFormSubmit(null, function () {
      Model.SavedConn.saveConnection(name, this.getFormData());
      this.fillSavedConnections();
      this.setButtonShown(false);
    }.bind(this));
  },

  onFormSubmit: function (e, callback) {
    var button = this.form.find('input[type=submit]');
    var buttonText = button.val();
    button.attr('disabled', true).val("Connecting...");

    e && e.preventDefault();
    var options = this.getFormData();

    this.makeConnection(options, {}, function (tab) {
      button.removeAttr('disabled').val(buttonText);
      if (callback && tab) callback(tab);
    });
  },

  getFormData: function () {
    return {
      host: this.form.find('[name=host]').val(),
      port: this.form.find('[name=port]').val(),
      user: this.form.find('[name=user]').val(),
      query: this.form.find('[name=query]').val(),
      password: this.form.find('[name=password]').val(),
      database: this.form.find('[name=database]').val()
    };
  },

  formChanged: function (event) {
    if (this.connectionName == "**new**") return;

    var formData = this.getFormData();
    var isChanged = !Model.SavedConn.isEqualWithSaved(this.connectionName, formData);

    if (isChanged) {
      this.setButtonShown(true);
    } else {
      this.setButtonShown(false);
    }
  },

  setButtonShown: function (isShown) {
    this.form.find("button")[isShown ? 'show' : 'hide']();
  },

  makeConnection: function (connectionOptions, options, callback) {
    App.startLoading("Connecting...");

    if (typeof callback == 'undefined' && typeof options == 'function') {
      callback = options;
      options = {};
    }

    var conn = new Connection(connectionOptions, function (status, message) {
      App.stopLoading();
      if (status) {
        var tab = App.addDbScreen(conn, options.name || this.connectionName, options);
        tab.activate();
        if (callback) callback(tab);
      } else {
        if (callback) callback(false);
        window.alertify.alert(this.humanErrorMessage(message));
      }
    }.bind(this));
    global.conn = conn; // TODO: clean
  },

  humanErrorMessage: function (error) {
    if (error == "connect ECONNREFUSED") {
      return "Connection refused.<br>Make sure postgres is running";
    } else {
      return error;
    }
  },
});

LoginScreen.prototype.initEvents = Pane.prototype.initEvents;