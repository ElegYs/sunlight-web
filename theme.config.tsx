import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps: () => ({ title: 'SunLight - полуванильный сервер' }),
  head: (
      <>
          <link rel='icon' type='image/x-icon' href='/assets/sunlightlogo.ico' />
          <meta content='/assets/sunlightlogo.png' property='og:image' />
          <meta content='#ff9500' data-react-helmet='true' name='theme-color' />
      </>
  ),
  logo: (
      <>
          <img src='/assets/sunlightlogo.png' width={32} height={32} />
          <h1 style={{ marginLeft: '0.5rem', fontWeight: 600 }}>MagmaMC</h1>
      </>
  ),
  chat: { link: 'hhttps://discord.gg/4rH2DuYYEN' },
  docsRepositoryBase: 'https://google.com/',
  themeSwitch: {
      useOptions: () => ({ dark: 'Тёмная', light: 'Светлая', system: 'Как в системе' }),
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
  editLink: false,
  toc: { title: 'Содержание' },
};

export default config
