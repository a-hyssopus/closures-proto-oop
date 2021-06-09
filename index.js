function HtmlElement() {
    this.click = function () {
        console.log('Clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('Focused');
}

const e = new HtmlElement();
e.click();
e.focus();

function HtmlSelectElement(items = []) {
    HtmlElement.call(this);

    this.items = items;
    this.addItem = function (item) {
        this.items.push(item)
    }
    this.removeItemIndex = function (index) {
        if (this.items.length && index < items.length) {
            return this.items.splice(index, 1);
        } else {
            console.log('You should remove item on the existing position');
        }
    }
    this.removeItemName = function (item) {
        if (this.items.length && this.items.includes(item)) {
            const index = this.items.findIndex(el => (el === item))
            this.items.splice(index, 1)
        } else {
            console.log('You should remove an existing item');
        }
    }
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const arr = ['ul', 'li', 'p']
const select = new HtmlSelectElement(arr);
select.addItem('h2');

select.removeItemIndex(2);
select.removeItemName('li');
select.removeItemName('div');
console.log(select.items);

select.focus();
select.click();