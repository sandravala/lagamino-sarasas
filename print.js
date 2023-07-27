'use strict';

const CalcHub_Print = function() {

  const btnLinks = document.querySelectorAll('.formbox__btn-link');

  if (btnLinks.length > 0) {
    btnLinks.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const link = window.location.origin + window.location.pathname;
        const id = btn.id.split('-')[3];
        const url = link + '#calculator_' + id;
        navigator.clipboard.writeText(url).then(() => {
        }, () => {
        });
      });
    });
  }

  const btnsPrint = document.querySelectorAll('.formbox__btn-print');

  if (btnsPrint.length > 0) {
    btnsPrint.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const id = btn.value;
        const form = document.getElementById('calculator_' + id);
        const formData = new FormData(form);
        const nonce = document.getElementById('print_calculator_' + id).value;
        const nonceString = 'print_calculator_' + id + '=' + nonce;
        const url = location.protocol + '//' + location.host + location.pathname + '?cb_view=' + id + '&' + nonceString;
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        const json = JSON.stringify(object);

        setLocalStorage(id, 'print', json);

        window.open(url, '_blank').focus();

      });
    });
  }

  function setLocalStorage(id, type, val) {
    const key = 'cb_calculate_' + id + '_' + type;
    sessionStorage.setItem(key, val);
  }

};

document.addEventListener('DOMContentLoaded', () => {
  new CalcHub_Print;
});
