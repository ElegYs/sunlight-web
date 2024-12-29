import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps: () => ({ title: 'Lumen - ванильный сервер' }),
  head: (
      <>
          <link rel='icon' type='image/x-icon' href='/assets/lumenlog.ico' />
          <meta content='/assets/lumencraft.png' property='og:image' />
          <meta content='#ff9500' data-react-helmet='true' name='theme-color' />
      </>
  ),
  logo: (
      <>
          <img src='/assets/sunlightlogo.png' width={32} height={32} />
          <h1 style={{ marginLeft: '0.5rem', fontWeight: 600 }}>Lumen</h1>
      </>
  ),
  chat: { link: 'https://discord.gg/F6vkpzT8' },
  docsRepositoryBase: 'https://github.com/DoubleTrouble-rbxm/sunlight-web/tree/main/pages',
  // themeSwitch: {
  //   useOptions() {
  //     return {
  //       light: 'Светлая',
  //       dark: 'Тёмная',
  //       system: 'Как в системе'
  //     }
  //   }
  // },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://discord.gg/F6vkpzT8" target="_blank">
        🎉 Открытие уже совсем скоро! Не пропусти →
      </a>
    )
  },
  search: {
      emptyResult: (
          <span className='nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400'>
              Ничего не найдено.
          </span>
      ),
      error: 'Произошла ошибка.',
      placeholder: () => 'Поиск по сайту',
  },
  gitTimestamp: ({ timestamp }) => (
      <>
          Последнее изменение{' '}
          <time dateTime={timestamp.toISOString()}>
              {timestamp.toLocaleDateString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
              })}
          </time>
      </>
  ),
  navigation: { prev: true, next: true },
  feedback: { content: null },
  footer: { component: null },
  editLink: { text: "" },
  toc: { title: 'Содержание' },
};

export default config
