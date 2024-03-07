document.addEventListener('DOMContentLoaded', () => {
  const _header = document.querySelector(`.header`);
  const _navWrap = _header.querySelector(`.header_nav`);
  const _navItemAll = _navWrap.querySelectorAll(`.nav_list > li`);
  const _main = document.querySelector(`.main`);
  const _sectionAll = _main.querySelectorAll(`section`);

  function navSelectedFunc() {
    const _scrollY = window.scrollY;
    
    _sectionAll.forEach(_section => {
      const _sectionHeight = _section.offsetHeight;
      const _sectionTop = _section.offsetTop;
      const _sectionId = _section.getAttribute(`id`);
      const _navItem = _navWrap.querySelector(`.nav_list a[href*=` + _sectionId + `]`).closest(`li`);
      
      if (
        _scrollY >= _sectionTop &&
        _scrollY < _sectionTop + _sectionHeight
      ) {
        _navItem.classList.add(`selected`);
      } else {
        _navItem.classList.remove(`selected`);
      }
    });
  };

  function scrollFunc(_section) {
    const _scrollTop = _section.offsetTop;

    window.scrollTo({top: _scrollTop, behavior: `smooth`});
  };

  _navItemAll.forEach((_item) => {
    _item.addEventListener(`click`, function(event) {
      const _thisItem = this;
      const _href = _thisItem.querySelector(`a`).getAttribute(`href`).substr(1);

      event.preventDefault();

      _sectionAll.forEach(_section => {
        if (_section.getAttribute(`id`) === _href) {

          scrollFunc(_section);
        }
      });
    });
  });

  document.addEventListener(`scroll`, function () {
    navSelectedFunc();
  });
});