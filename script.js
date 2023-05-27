const toggleSwitch = document.getElementById('mode-toggle');

toggleSwitch.addEventListener('change', switchTheme, false);
object.onchange = switchTheme(){
function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
};
