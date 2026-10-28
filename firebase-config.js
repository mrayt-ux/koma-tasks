// Firebase のウェブアプリ設定。Firebase の「プロジェクトの設定 → マイアプリ」に出る firebaseConfig の中身を貼ります。
// ここに書く値はページに公開する前提のもので、秘密の鍵ではありません（データの保護は firestore.rules で行います）。
// null のままだと、ログインなしでブラウザの中にだけ保存する動きになります。
window.FIREBASE_CONFIG = null;
