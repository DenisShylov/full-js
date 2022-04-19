const callbackPrompt = {
  message: 'Entered phone number',
  showPrompt() {
    const phone = prompt(`${this.message}`);
    console.log(phone);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
callbackPrompt.showDeferredPrompt(1000);
