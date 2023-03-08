import { LionInputDate } from '@lion/ui/input-date'

customElements.define('lion-date', LionInputDate);

const LionDate = document.querySelector('#lionDate');

LionDate.addEventListener('model-value-changed', (event) => {
    console.log(event);
})

LionDate.modelValue = new Date();
