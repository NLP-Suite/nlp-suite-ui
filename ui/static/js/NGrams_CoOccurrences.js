function onlyone() {
  var buttons = document.getElementsByClassName("run-button");
  if (!buttons || buttons.length === 0) return;

  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    var scope = btn.form || document;

    function makeUpdater(currentBtn, currentScope) {
      return function () {
        var count = 0;
        var inputs = currentScope.getElementsByTagName("input");

        for (var j = 0; j < inputs.length; j++) {
          var input = inputs[j];
          if (
            (input.type === "checkbox" || input.type === "radio") &&
            !input.disabled &&
            input.checked
          ) {
            count++;
          }
        }

        if (count > 0) {
          currentBtn.classList.remove("is-disabled");
          currentBtn.setAttribute("aria-disabled", "false");
        } else {
          currentBtn.classList.add("is-disabled");
          currentBtn.setAttribute("aria-disabled", "true");
        }
      };
    }

    var update = makeUpdater(btn, scope);
    update();

    (function (currentBtn, currentScope, currentUpdate) {
      currentScope.onchange = function (e) {
        if (e && e.target) {
          if (e.target.type === "checkbox" || e.target.type === "radio") {
            currentUpdate();
          }
        }
      };

      currentBtn.onclick = function (e) {
        var count = 0;
        var inputs = currentScope.getElementsByTagName("input");

        for (var k = 0; k < inputs.length; k++) {
          var inp = inputs[k];
          if (
            (inp.type === "checkbox" || inp.type === "radio") &&
            !inp.disabled &&
            inp.checked
          ) {
            count++;
          }
        }

        if (count === 0) {
          e.preventDefault();
          alert("Please select at least one option.");
        }
      };
    })(btn, scope, update);
  }
}

onlyone();