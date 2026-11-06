
Vue.createApp({

  // データの定義
  data() {
    return {
      budget: 200000,
      expenses: 120000
    };
  },

  // 計算するプロパティ
  computed: {

    // 残りのお金を計算
    remaining() {
      return this.budget - this.expenses;
    },

    // 使ったお金の割合を計算
    usageRate() {
      if (this.budget <= 0) return 0;

      return Math.floor(
        (this.expenses / this.budget) * 100
      );
    },

    // お金の使い方を判定
    status() {
      if (this.budget <= 0) {
        return "予算を入力してください";
      }

      if (this.expenses > this.budget) {
        return "予算オーバー";
      }

      if (this.usageRate >= 80) {
        return "使いすぎに注意";
      }

      return "いい感じです";
    },

    // アドバイスを表示
    advice() {
      if (this.budget <= 0 || this.expenses < 0) {
        return "正しい数字を入力してください。";
      }

      if (this.expenses > this.budget) {
        return "お金を使いすぎています。節約しましょう。";
      }

      if (this.usageRate >= 80) {
        return "残りのお金が少ないです。気をつけましょう。";
      }

      return "このままお金を大切に使いましょう。";
    }

  },

  // メソッド
  methods: {

    // 数字をリセット
    resetBudget() {
      this.budget = 200000;
      this.expenses = 0;
    }

  }

}).mount("#app");
