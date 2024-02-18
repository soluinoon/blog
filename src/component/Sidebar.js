import React from 'react';
import { useNavigator } from './NavigatorContext';
import '../css/Sidebar.css';

export default function Sidebar() {
  const { selectedItem } = useNavigator();

  const articles = [
    { category: 'Book', titles: ['인간관계론', '치즈책'] },
    { category: 'Life', titles: ['일대기'] },
    { category: 'Portpolio', titles: ['Portpolio'] },
    { category: 'Tech', titles: ['AWS', 'Lambda'] },
  ];

  // 선택된 카테고리에 해당하는 제목 리스트를 가져오는 함수
  const getTitlesByCategory = (category) => {
    const selectedCategory = articles.find(item => item.category === category);
    return selectedCategory ? selectedCategory.titles : [];
  };

  // 선택된 항목에 해당하는 제목들을 가져옴
  const selectedTitles = getTitlesByCategory(selectedItem);

  return (
    <div className="sidebar">
      <h1>Side bar</h1>
      <p>Selected Item: {selectedItem}</p>
      <ul>
        {selectedTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
