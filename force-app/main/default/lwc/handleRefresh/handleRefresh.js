import { LightningElement } from "lwc";
import { registerRefreshHandler, unregisterRefreshHandler } from "lightning/refresh";

export default class HandleRefresh extends LightningElement {
  eventReceivedTimestamp;

  connectedCallback() {
    this.refreshHandlerID = registerRefreshHandler(this, this.refresh);
  }

  disconnectedCallback() {
    unregisterRefreshHandler(this.refreshHandlerID);
  }

  refresh() {
    return new Promise((resolve) => {
      const currentDate = new Date();
      this.eventReceivedTimestamp = `${currentDate.toDateString()} - ${currentDate.toLocaleTimeString()}`;
      resolve(true);
    });
  }
}
