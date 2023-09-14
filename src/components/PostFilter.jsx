import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className = "menu_search">
            <MyInput
              placeholder = "Поиск..."
              value = {filter.query}
              onChange = {e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect 
              value = {filter.sort}
              onChange={selectedSort => setFilter({...filter, query: selectedSort})}
              defaultValue = "Сортировка ▼"
              options = {[
                {name: "По названию", value: "title"},
                {name: "По описанию", value: "body"}
              ]}
            />
      </div>
    );
};

export default PostFilter;