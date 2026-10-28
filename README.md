# 講義タスク帳

講義が終わったあとに、選択式の質問に答えるだけで「課題・小テスト・復習」を記録する、大学生向けのWebアプリです。

- 公開先：GitHub Pages（`https://mrayt-ux.github.io/koma-tasks/`）
- ログインとデータ保存：Firebase（Googleログイン・Cloud Firestore、無料のSparkプラン）
- `firebase-config.js` が未設定（`null`）のときは、ログインなしでブラウザの中にだけ保存します。

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | アプリ本体（HTML・CSS・JavaScriptを1ファイルにまとめたもの） |
| `firebase-config.js` | Firebaseのウェブアプリ設定（公開して問題ない値） |
| `firestore.rules` | データベースの保護ルール。Firebaseの管理画面に貼り付けて使う |
| `manifest.webmanifest`・`icon-*.png` | ホーム画面に追加したときの名前とアイコン |

## Firebaseの設定手順

1. Firebaseでプロジェクトを作る（Googleアナリティクスはオフで可、Sparkプランのまま）
2. Authentication → ログイン方法 → Google を有効にする
3. Firestore Database を作成（場所：`asia-northeast1`、本番環境モード）
4. Firestore Database → ルール に `firestore.rules` の中身を貼り付けて公開する
5. プロジェクトの設定 → マイアプリ → ウェブアプリを追加し、表示された `firebaseConfig` の中身を `firebase-config.js` に入れる
6. Authentication → 設定 → 承認済みドメイン に `mrayt-ux.github.io` を追加する

## データの保存場所

ログインした人のデータは、Firestore の `users/<ユーザーID>` に1件だけ保存されます。`firestore.rules` により、本人以外は読み書きできません。

## 注意

LINEなどアプリの中のブラウザでは、Googleの仕様でログインできません。右下の「…」から「ブラウザで開く」を選んでください。
