$(document).ready(function() {
	let last_project = "#project1full";

	// jQuery Function Number 1
    $(".project").click(function() {
    	// jQuery Function Number 2
        last_project = "#" + $(this).attr("id") + "full";

        // jQuery Function Number 3
        $(last_project).removeClass("inactive");
        // jQuery Function Number 4
        $(last_project).addClass("active");
    })

    // jQuery Function Number 5
    $(".project").hover(function() {
        last_project = "#" + $(this).attr("id");
        // jQuery Function Number 6
        $(last_project).css("color", "black");
    }, function() {
        last_project = "#" + $(this).attr("id");
        $(last_project).css("color", "gray");
    })

    $(".projectoverlay").click(function() {

        last_project = "#" + $(this).attr("id");

        $(last_project).removeClass("active");
        $(last_project).addClass("inactive");
    })
})