const db = require("../util/database");

module.exports = class MovieModal {
  constructor(id, name, imageUrl, description) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  save() {
    return db.execute(
      "INSERT INTO movieinfo (name,imageurl,description) VALUES(?,?,?)",
      [this.name, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * from movieinfo");
  }

  static deleteById(id) {
    return db.execute("DELETE FROM movieinfo where id = ?", [id]);
  }
};
