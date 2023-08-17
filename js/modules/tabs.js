

function tabs(tabSelector, tabContentSelector, tabsParentSelector, activeClass) {
    let tabs = document.querySelectorAll(tabSelector),
        tabsContent = document.querySelectorAll(tabContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 1) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((item, index) => {
                if (target == item) {

                    hideTabContent();
                    showTabContent(index);

                }
            });
        }
    });
}

export default tabs;