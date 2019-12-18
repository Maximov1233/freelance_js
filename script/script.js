document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const customer       = document.querySelector('#customer'),
          freelancer     = document.querySelector('#freelancer'),
          blockCustomer  = document.querySelector('#block-customer'),
          blockFreelance = document.querySelector('#block-freelancer'),
          blockChoice    = document.querySelector('#block-choice'),
          btnExit        = document.querySelector('#btn-exit'),
          formCustomer   = document.querySelector('#form-customer');

    const orders = [];

    customer.addEventListener('click', () => {
        blockChoice.style.display = '';
        blockCustomer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    freelancer.addEventListener('click', () => {
        blockChoice.style.display = '';
        blockFreelance.style.display = 'block';
        btnExit.style.display = 'block';
    });

    btnExit.addEventListener('click', () => {
        btnExit.style.display = '';
        blockFreelance.style.display = '';
        blockCustomer.style.display = '';
        blockChoice.style.display = 'block';
    });

    formCustomer.addEventListener('submit', (e) => {
        e.preventDefault();
        const obj = {};
        for (const elem of formCustomer.elements) {
            if ((elem.tagName === 'INPUT' && elem.type !== 'radio') || (elem.type === 'radio' && elem.checked) || (elem.tagName === 'TEXTAREA')) {
                obj[elem.name] = elem.value;

                if (elem.type !== 'radio') {
                    elem.value = '';
                }
            } 
        }

        orders.push(obj);
    });
});