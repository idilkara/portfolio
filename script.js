function toggleProjectDescription(project) {
    // Toggle the 'active' class to show/hide project descriptions

    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log('Scroll Position Before:', scrollPosition);

    project.classList.toggle('active');

    window.scrollTo(0, scrollPosition);
    scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log('Scroll Positionafetr: ', scrollPosition);


    // Get the anchor element within the clicked project
    var anchorElement = project.querySelector('a');

    // Check if the 'active' class is present
    var isActive = project.classList.contains('active');

    // Update the text based on the current state
    anchorElement.textContent = isActive ? 'Click to hide details' : 'Click to view details';


}
