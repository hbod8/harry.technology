$(document).ready(function() {
    $('.menuItemLogo,.menuItemHome,.menuItemProjects,.menuItemHelp,.menuItemAbout,.menuItemGitHub').mouseenter(function() {
        $(this).fadeTo("fast", 0.7);
        console.log("faded out");
    });
    $('.menuItemLogo,.menuItemHome,.menuItemProjects,.menuItemHelp,.menuItemAbout,.menuItemGitHub').mouseleave(function() {
        $(this).fadeTo("fast", 1);
        console.log("faded in");
    });
});