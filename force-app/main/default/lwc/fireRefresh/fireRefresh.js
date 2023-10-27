import { LightningElement } from 'lwc';
import { RefreshEvent } from "lightning/refresh";

export default class FireRefresh extends LightningElement {

    handleClick() {
        this.dispatchEvent(new RefreshEvent());
    }
}