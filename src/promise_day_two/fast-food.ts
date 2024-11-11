document.getElementById('startSimulation')?.addEventListener('click', () => {
    const ordersDiv = document.getElementById('orders') as HTMLDivElement;
    ordersDiv.innerHTML = '';
  
    createCustomerOrder(1, 'Cola', ordersDiv);
    createCustomerOrder(2, 'Sprite', ordersDiv);
    createCustomerOrder(3, 'Wasser', ordersDiv);
  });
  
  function getRandomDurationInMilliseconds(): number {
    const min = 2000;
    const max = 12000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function order(customerNumber: number, customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            customerDiv.innerHTML += `Bestellung von Kunde ${customerNumber} aufgenommen.<br>`;
            resolve();
        }, getRandomDurationInMilliseconds())
    })
  }
  function pay(customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            customerDiv.innerHTML += `Bezahlung durchführen.<br>`;
            resolve()
        }, getRandomDurationInMilliseconds())
    })
  }
  function makeBurger(customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            customerDiv.innerHTML += `Bereite einen einen Burger vor.`;
            resolve()
        }, getRandomDurationInMilliseconds())
    })
  }
  function makeFries(customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            customerDiv.innerHTML += `Pommes vorbereiten.`;
            resolve()
        }, getRandomDurationInMilliseconds())
    })
  }
  function makeDrink(drink: string, customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            customerDiv.innerHTML += `Getränk einfüllen.`;
            resolve()
        }, getRandomDurationInMilliseconds())
    })
  }
  function createCustomerOrder(customerNumber: number, drink: string, ordersDiv: HTMLDivElement) {
    const customerDiv = document.createElement('div');
    customerDiv.id = `customer-${customerNumber}`;
    ordersDiv.appendChild(customerDiv);
    processOrder(customerNumber, drink, customerDiv)
  }
  function processOrder(customerNumber: number, drink: string, customerDiv: HTMLDivElement): Promise<void> {
    return order(customerNumber, customerDiv)
    .then(() => pay(customerDiv))
    .then(() => makeBurger(customerDiv))
    .then(()=> makeFries(customerDiv))
    .then(()=> makeDrink(drink, customerDiv))
    .then(()=> {
      console.log('Bestellung abgeschlossen');
    })
  .finally(() => {
    customerDiv.innerHTML += 'Bestellung abgeschlossen'
  })
}