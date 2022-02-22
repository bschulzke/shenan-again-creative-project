let toolsOpen = false;

let toolsIconVisible = true;

function toggleTools() {
    if (!toolsOpen) {
        $("#tools-menu").show();
        document.getElementById("tools-collapse").innerHTML = "&minus;";
        toolsOpen = true;
    } else {
        $("#tools-menu").hide();
        document.getElementById("tools-collapse").innerHTML = "&plus;";
        toolsOpen = false;
    }
}

function closeTools() {
    $("#tools-menu").hide();
    document.getElementById("tools-collapse").innerHTML = "&plus;";
    toolsOpen = false;
}

function openTool(id) {
    closeOtherTools(id);
    $(`#${id}`).show();
}

function closeOtherTools(id) {
    if (id !== "calculator") {
        $("#calculator").hide();
    }
    if (id !== "charts") {
        $("#charts").hide();
    }
    if (id !== "roles") {
        $("#roles").hide();
    }
}

function toggleToolsMenuIcon() {
    if (toolsIconVisible) {
        console.log("Hiding");
        $("#tools-sidebar").hide();
    } else {
        console.log("Showing");
        $("#tools-sidebar").show();
    }
    toolsIconVisible = !toolsIconVisible;
}

function isEmpty(element) {
    return element === null || element === undefined || element === NaN || element === "";
}

function sendEmail() {
    if (!isEmpty($('#emailAddress').val()) && !isEmpty($('#message-body').val())) {
    document.getElementById("emailAddress").value = "";
    document.getElementById("message-body").value = "";
    document.getElementById("email-success").style = "color: green";
    document.getElementById("email-success").innerText = "Email submitted!";   
    }
    else if (isEmpty($('#emailAddress').val())) {
        document.getElementById("email-success").style = "color: #CF6679";
        document.getElementById("email-success").innerText = "enter an email address";
    } else {
        document.getElementById("email-success").style = "color: #CF6679";
        document.getElementById("email-success").innerText = "enter a message";
    }
}

function validateEmail() {
    document.getElementById("emailAddress").addEventListener("keyup", function(event) {
        event.preventDefault();
        });
        document.getElementById("emailAddress").addEventListener("keyup", function(event) {
        event.preventDefault();
        const url = "https://api.eva.pingutil.com/email?email="+
          document.getElementById("emailAddress").value;
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                if (json.status == 'success') {
                    console.log('Success!');
                    document.getElementById("txtHint").innerHTML=
                    `<span></span>` 
                } else {
                    document.getElementById("txtHint").innerHTML=
                    `<span style="color: #CF6679">enter a valid email addesss</span>` 
                }
            });
    });
}