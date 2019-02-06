reorderGroup.addEventListener('ionItemReorder', (ev) => {
    console.log(`Moving item from ${ev.detail.from} to ${ev.detail.to}`);
  
    this.dataList = reorderArray(this.dataList, ev.detail.from, ev.detail.to);
    ev.detail.complete();
  });