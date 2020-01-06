const handlers = {};
const HIDE_PANEL = 'data-hide-panel';

function guid() {
  function _p8(s) {
    const p = (`${Math.random().toString(16)}000000000`).substr(2, 8);
    return s ? `_${p.substr(0, 4)}_${p.substr(4, 4)}` : p;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
}

function findHideListPanel(target) {
  let parent = target;
  while (parent) {
    const click = parent[HIDE_PANEL];
    if (click) return click;
    parent = parent.parentNode;
  }
  return null;
}

export function hideListPanel(e) {
  const click = findHideListPanel(e.target);
  if (click) click(e);
}

export function hideListAction(node, cb) {
  const key = `click_${guid()}`;

  const onClick = (e) => {
    if (node.contains(e.target)) {
      Object.values(handlers).forEach(fn => {
        if (cb !== fn) fn();
      });
    }
  };

  handlers[key] = cb;
  node[HIDE_PANEL] = onClick;
  window.addEventListener("click", cb);

  return {
    destroy: () => {
      delete handlers[key];
      delete node[HIDE_PANEL];
      window.removeEventListener("click", cb);
    }
  };
}