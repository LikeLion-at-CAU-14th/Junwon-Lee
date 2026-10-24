export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: '다크 나이트',
    year: 2008,
    genre: '슈퍼히어로, 액션, 범죄',
    director: '크리스토퍼 놀란',
    description:
      '배트맨, 조커, 그리고 그 사이에 낀 하비 덴트의 삼각관계\n슈퍼히어로 영화의 틀에 선과 악의 대립이라는 철학을 담은 크리스토퍼 놀란, 그리고 탄생한 역대 최고의 빌런',
    image: '/posters/the_dark_knight.jpg',
  },
  {
    id: 2,
    title: '펄프 픽션',
    year: 1994,
    genre: '범죄, 드라마, 블랙 코미디',
    director: '쿠엔틴 타란티노',
    description:
      '이게 이렇게 된다고?\n그냥 보면 폭력과 피와 욕설이 난무하는 B급이지만, 수많은 대사들과 함계 연결되는 스토리',
    image: '/posters/pulp_fiction.jpg',
  },
  {
    id: 3,
    title: '트랜스포머',
    year: 2007,
    genre: 'SF, 액션',
    director: '마이클 베이',
    description:
      '자동차 + 거대 로봇 + 변신 = ❤️\nCG로 보여줄 수 있는 끝을 보여준 영화, 그리고 마이클 베이의 폭발',
    image: '/posters/transformers.jpg',
  },
  {
    id: 4,
    title: '오션스 일레븐',
    year: 2001,
    genre: '범죄, 코미디',
    director: '스티븐 소더버그',
    description:
      '카지노, 돈, 도둑질...모든 것은 계획대로\n스티븐 소더버그만의 절제된 연출 기법이 인상적인 영화',
    image: '/posters/oceans_11.jpg',
  },
  {
    id: 5,
    title: '저수지의 개들',
    year: 1992,
    genre: '범죄, 느와르',
    director: '쿠엔틴 타란티노',
    description:
      '돌다리도 두들겨 보고 건너라\n잡담으로 시작하여 연출로 반전을 만개시키는 타란티노의 매력',
    image: '/posters/reservoir_dogs.jpg',
  },
  {
    id: 6,
    title: '스타워즈: 제국의 역습',
    year: 1980,
    genre: 'SF, 액션',
    director: '어빈 커슈너',
    description:
      'I am your father.\n말이 필요 없는 조지 루카스의 역대 최고의 SF 세계관',
    image: '/posters/empire_strikes_back.jpg',
  },
];