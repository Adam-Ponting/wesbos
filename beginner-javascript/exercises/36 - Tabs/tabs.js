const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
    // hide all
    tabPanels.forEach((panel) => {
        panel.hidden = true;
    });

    // mark all as unselected
    tabButtons.forEach((tab) => {
        tab.setAttribute('aria-selected', false);
    });

    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    // find the associated tabpanel and show it
    const { id } = event.currentTarget;

    // METHOD ONE
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // tabPanel.hidden = false;

    // METHOD TWO
    const tabPanel = tabPanels.find((panel) => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}
tabButtons.forEach((button) => {
    button.addEventListener('click', handleTabClick);
});
