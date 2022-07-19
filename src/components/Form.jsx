import React, { Component } from "react";
import TextArea from "./TextArea";
import Input from "./Input";

class Main extends Component {
  state = {
    header: "",
    userName: "",
    userSurname: "",
    berthDate: "",
    userPhone: "",
    userWeb: "",
    userAbout: "",
    userSteak: "",
    projectDescription: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ userName: "", userSurname: "" });
  };
  selectState = (e) => {
    this.setState({ berthDate: e.target.value });
  };

  render() {
    const {
      userName,
      userSurname,
      berthDate,
      userPhone,
      userWeb,
      userAbout,
      userSteak,
      projectDescription,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h4>Имя: </h4>
          <Input
            type="text"
            value={userName}
            placeholder="Имя"
            onChange={this.onChange}
            name="userName"
          />

          <label>Фамилия:</label>
          <Input
            type="text"
            value={userSurname}
            placeholder="Фамилия"
            onChange={this.onChange}
            name="userSurname"
          />

          <label>Дата рождения: </label>
          <Input
            type="date"
            value={berthDate}
            onChange={this.selectState}
            name="userDate"
          />

          <label>Телефон: </label>
          <Input
            type="tel"
            value={userPhone}
            placeholder="380(99)-999-99-99"
            onChange={this.onChange}
            name="userPhone"
          />

          <label>Сайт: </label>
          <Input
            type="text"
            value={userWeb}
            placeholder="Сайт"
            onChange={this.onChange}
            name="userWeb"
          />
          <TextArea
            label="О себе:"
            rows="7"
            value={userAbout}
            placeholder="О себе"
            onChange={this.onChange}
            name="userAbout"
          ></TextArea>

          <TextArea
            label="Стек технологий:"
            rows="7"
            value={userSteak}
            placeholder="Стек технологий"
            onChange={this.onChange}
            name="userSteak"
          ></TextArea>
          <TextArea
            label="Описание последнего проекта: "
            rows="7"
            value={projectDescription}
            placeholder="Описание последнего проекта"
            onChange={this.onChange}
            name="projectDescription"
          ></TextArea>

          <div className="buttons">
            <button>Отмена</button>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Main;
