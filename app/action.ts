'use server';

import { connection } from 'next/server';

// 設定データを表す型
interface Config {
  message: string;
}

// 設定データを取得する
const getConfig : () => Promise<Config> = (() => {
  let config: Config | null = null;
  return async () => {
    await connection();
    if (!config) {
      // まだ設定データを読み込んでいなければ、読み込む
      config = {
        message: process.env.MESSAGE,
      };
    }
    return config;
  };
})();

// 設定データに基づいてメッセージを返す
export async function getMessage() {
  const config = await getConfig();
  return config.message;
};
