(function () {
  //全体で使用する変数
  /*ここに演習 4 タスク 1 で変数を追加します。*/
//全体で使用する変数
  let canvas;
  let ctx;
  let img = {snow: null, snow_man: null};
  let requestId;
  //DOM のロードが完了したら実行
  document.addEventListener('DOMContentLoaded', () => {
    loadAssets();
    /*ここに演習 4 タスク 1 で setHandlers 関数の呼び出しを記述します*/
  });

  //Sprite クラスの定義
  class Sprite {
    constructor(img) {
      this.image = img; //image オブジェクト
      this.height = img.height;
      this.width = img.width;
      this.x = 0; //表示位置 x
      this.y = 0; //表示位置 y
      this.dx = 0; //移動量 x
      this.dy = 0; //移動量 y
      this._imageIndex = 0;
      this._offset_x_pos = 0;
      /*ここに演習 7 のタスク 2 でオーディオ再生用の
     プロパティを追加します*/
      //Sprite を描画するメソッド
      this.draw = () => {
        ctx.drawImage(img, this.x, this.y);
      };
    }

    /*ここに演習 7 のタスク 1 で Getter と Setter の
       コードを追加します*/
  }

  /*ここに演習 2 タスク 2 で Sprite クラス(関数) のインスタンスを格納するための変数オブジェクトを定義します*/
  /*ここに演習 6 タスク 1 で SNOWS_MOVING_CON オブジェクト変数を定義します。*/
  /*ここに演習 8 で Rule クラスを定義します*/

  //ゲームに必要なアセットをロードする
  function loadAssets() {
    /*ここに演習 8 で Rule クラスのインスタンスを生成するコードを記述します*/
    //HTML ファイル上の canvas エレメントのインスタンスを取得
    canvas = document.getElementById('bg');
    /*ここに演習 3 タスク 1 で Click イベントハンドラ処理を追加します*/
    //2D コンテキストを取得
    ctx = canvas.getContext('2d');
    //image オブジェクトのインスタンスを生成
    img.snow = new Image();
    //image オブジェクトに画像をロード
    img.snow.src = './img/snow.png';
    /*画像読み込み完了の Canvas に
    画像を表示するメソッドを記述 */
    img.snow.onload = () => {
      /*ここは演習 2 タスク 2 でハンドラ内のコードを完全に書き換えます*/
      //canvas 上で image を描画
      ctx.drawImage(img.snow, 0, 0);
    };
    //ここに演習 2 タスク 3 の雪だるま画像をロードする処理を記述します。
  };
  /*ここに演習 4 タスク 1 で setHandlers 関数を記述します。*/
  /*ここに演習 2 タスク 2 で getCenterPosition関数を記述します。*/
  /*ここに演習 3 タスク 1 で renderFrame関数を記述します。*/
  /*ここに演習 4 タスク 1 で getRightLimitPosition関数を記述します。*/
  /*ここに演習 5 で isHit 関数を記述します。*/
  /*ここに演習 5 で hitJob 関数を記述します。*/
  /*ここに演習 6 タスク 2 で getRandomPosition 関数を記述します。*/
  /*ここに演習 6 タスク 3 で loadCheck 関数を記述します。*/
})();
