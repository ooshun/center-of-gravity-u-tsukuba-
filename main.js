var app = new Vue({
  el: '#app',

  data: {
    firstX: 36.1087235450383,
    firstY: 140.102336950638,
    secondX: 36.1107893360956,
    secondY: 140.101683786793,
    thirdX: 36.1103795582003,
    thirdY: 140.100874737367,
    fourthX: 36.0939701867867,
    fourthY: 140.103062025918,
    fifthX: 36.1034817580408,
    fifthY: 140.102963414476,
    seventhX: 36.0866345766734,
    seventhY: 140.106054056452,
    input_1: 0,
    input_2: 0,
    input_3: 0,
    input_4: 0,
    input_5: 0,
    input_7: 0,
  },
  computed: {
    sub_firstX: function () {
      return this.firstX - this.seventhX
    },
    sub_firstY: function () {
      return this.firstY - this.seventhY
    },
    sub_secondX: function () {
      return this.secondX - this.seventhX
    },
    sub_secondY: function () {
      return this.secondY - this.seventhY
    },
    sub_thirdX: function () {
      return this.thirdX - this.seventhX
    },
    sub_thirdY: function () {
      return this.thirdY - this.seventhY
    },
    sub_fourthX: function () {
      return this.fourthX - this.seventhX
    },
    sub_fourthY: function () {
      return this.fourthY - this.seventhY
    },
    sub_fifthX: function () {
      return this.fifthX - this.seventhX
    },
    sub_fifthY: function () {
      return this.fifthY - this.seventhY
    },
    sub_seventhX: function () {
      return this.seventhX - this.seventhX
    },
    sub_seventhY: function () {
      return this.seventhY - this.seventhY
    },
    sum_all: function () {
      return (
        this.input_1 +
        this.input_2 +
        this.input_3 +
        this.input_4 +
        this.input_5 +
        this.input_7
      )
    },
    mapX: function () {
      return (
        (this.firstX * this.input_1 +
          this.secondX * this.input_2 +
          this.thirdX * this.input_3 +
          this.fourthX * this.input_4 +
          this.fifthX * this.input_5 +
          this.seventhX * this.input_7) /
        this.sum_all
      )
    },
    mapY: function () {
      return (
        (this.firstY * this.input_1 +
          this.secondY * this.input_2 +
          this.thirdY * this.input_3 +
          this.fourthY * this.input_4 +
          this.fifthY * this.input_5 +
          this.seventhY * this.input_7) /
        this.sum_all
      )
    },
    position: function () {
      return (
        'https://www.google.co.jp/maps/place/' +
        this.mapX +
        ',' +
        this.mapY +
        ',15z?hl=ja'
      )
    },
  },
})
