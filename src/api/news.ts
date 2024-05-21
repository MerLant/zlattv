import type { NewsList, NewsPreview, NewsDetailed } from '@/models/news'

const newsData: NewsDetailed[] = [
  {
    id: 1,
    title: 'Мы выйграли соревнование',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 1, name: 'Соревнования' },
      { id: 2, name: 'Победы' }
    ],
    author: { id: 1, name: 'Александр' },
    categories: [{ id: 1, name: 'Спорт' }],
    date: '2021-10-10',
    content: 'Подробное описание новости о победе в соревновании...'
  },
  {
    id: 2,
    title: 'Новый проект запущен',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 3, name: 'Проекты' },
      { id: 4, name: 'Технологии' }
    ],
    author: { id: 2, name: 'Екатерина' },
    categories: [{ id: 2, name: 'Вектор развития' }],
    date: '2022-05-05',
    content: 'Описание нового проекта, запущенного нашей компанией...'
  },
  {
    id: 3,
    title: 'Открытие нового офиса',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 5, name: 'Офис' },
      { id: 6, name: 'Открытие' }
    ],
    author: { id: 3, name: 'Дмитрий' },
    categories: [{ id: 3, name: 'Вектор развития' }],
    date: '2023-01-15',
    content: 'Описание открытия нового офиса нашей компании...'
  },
  {
    id: 4,
    title: 'Успешное завершение квартала',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 7, name: 'Финансы' },
      { id: 8, name: 'Отчёт' }
    ],
    author: { id: 4, name: 'Марина' },
    categories: [{ id: 3, name: 'Вектор развития' }],
    date: '2023-03-30',
    content: 'Подробности о финансовых результатах нашей компании за квартал...'
  },
  {
    id: 5,
    title: 'Запуск нового продукта',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 3, name: 'Проекты' },
      { id: 9, name: 'Продукты' }
    ],
    author: { id: 5, name: 'Иван' },
    categories: [{ id: 2, name: 'Вектор развития' }],
    date: '2023-07-20',
    content: 'Детальная информация о новом продукте, который мы запускаем...'
  },
  {
    id: 6,
    title: 'Социальная инициатива',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 11, name: 'Социальное' },
      { id: 12, name: 'Инициатива' }
    ],
    author: { id: 6, name: 'Анна' },
    categories: [{ id: 3, name: 'Вектор развития' }],
    date: '2023-09-05',
    content: 'Описание нашей новой социальной инициативы...'
  },
  {
    id: 7,
    title: 'Медицинская конференция',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 13, name: 'Медицина' },
      { id: 14, name: 'Конференции' }
    ],
    author: { id: 7, name: 'Елена' },
    categories: [{ id: 4, name: 'Медицина' }],
    date: '2023-11-12',
    content: 'Описание медицинской конференции и её результатов...'
  },
  {
    id: 8,
    title: 'Спортивные достижения',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 1, name: 'Соревнования' },
      { id: 2, name: 'Победы' }
    ],
    author: { id: 8, name: 'Сергей' },
    categories: [{ id: 1, name: 'Спорт' }],
    date: '2023-08-23',
    content: 'Достижения нашей команды в спортивных соревнованиях...'
  },
  {
    id: 9,
    title: 'Обновление медицинского оборудования',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 13, name: 'Медицина' },
      { id: 15, name: 'Оборудование' }
    ],
    author: { id: 9, name: 'Ольга' },
    categories: [{ id: 4, name: 'Медицина' }],
    date: '2023-04-15',
    content: 'Подробности о новом медицинском оборудовании в нашем учреждении...'
  },
  {
    id: 10,
    title: 'Вектор развития 2024',
    poster: 'https://via.placeholder.com/1000x500',
    tags: [
      { id: 3, name: 'Проекты' },
      { id: 4, name: 'Технологии' }
    ],
    author: { id: 10, name: 'Наталья' },
    categories: [{ id: 2, name: 'Вектор развития' }],
    date: '2024-01-01',
    content: 'Планы и проекты на 2024 год в рамках Вектора развития...'
  }
]

export async function getNewsList(): Promise<NewsList> {
  const news: NewsPreview[] = newsData.map(({ content, ...preview }) => preview)
  return { news }
}

export async function getNewsDetailed(id: number): Promise<NewsDetailed | null> {
  return newsData.find((news) => news.id === id) || null
}
