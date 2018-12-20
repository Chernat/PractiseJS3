var auto  = {
  brand : 'UAZ',
  releaseYear : 1989,
  mileage: 50000,
  color: 'yellow',
  ignition: false,
  start: false,
  fuelCount: 5,

  ignitionSwitcher: function(val) {
    if (this.fuelCount > 0) {
      this.ignition = val;
    } else {
      console.log('Заправь свой корч');
    }
  },

  startSwitcher: function(val) {
    if (this.ignition) {
      console.log('Машина ' + this.brand + ' марки ' +this.color + ' цвета поехала');
      this.start = val;
    } else {
      alert('Ignition off')
    }
  },

  stopSwitcher: function(val) {
    if (!this.ignition) {
      this.start = false;
      console.log('Зажигание и так выключено');
    } else {
      this.start = false;
      this.ignition = false
      console.log('Машинка остановилась');
    }
  },

  fuelRefill: function(val) {
    fuelCount += val;
  }
};

auto.ignitionSwitcher(true);
