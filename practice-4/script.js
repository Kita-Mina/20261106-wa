Vue.createApp({
  // データの定義
  data() {
    return {
      score: 75,
      // 成績の判定基準
      standards: [
        {
          min: 90,
          max: 101,
          range: "90〜100点",
          grade: "A",
          status: "優秀",
          color: "grade-a",
          advice: "非常に優秀な成績です。応用問題にも挑戦して、さらに理解を深めましょう。"
        },
      ]
    };
  },

  // 算出プロパティ
  computed: {
    // 点数に該当する評価を取得
    currentStandard() {
      return this.standards.find(item =>
        this.score >= item.min && this.score < item.max
      );
    },

    // 評価を取得
    grade() {
      return this.currentStandard?.grade || "－";
    },

    // 判定を取得
    status() {
      return this.currentStandard?.status || "判定できません";
    },

    // アドバイスを取得
    advice() {
      return this.currentStandard?.advice || "0〜100の範囲で点数を入力してください。";
    },

    // 合格ラインまでの差を算出
    differenceMessage() {
      const difference = 60 - this.score;

      if (difference > 0) {
        return `合格ラインまであと${difference}点です`;
      }

      return "合格ラインをクリアしています";
    }
  }
}).mount("#app");