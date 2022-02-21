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