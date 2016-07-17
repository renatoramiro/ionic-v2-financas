import {Storage, SqlStorage} from 'ionic-angular';

export class DAOContas {
  list: any;

  constructor() {
    let storage = new Storage(SqlStorage);
    storage.query('CREATE TABLE IF NOT EXISTS contas(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)').then((data) => {
      console.log('Tabela criada');
    }, (error) => {
      console.log('error: ', JSON.stringify(error.err));
    });
  }

  getList(successCallback) {
    let storage = new Storage(SqlStorage);
    storage.query('SELECT * FROM contas ORDER BY descricao ASC').then((data) => {
      let lista = [];
      for (let i = 0; i < data.res.rows.length; i++) {
        lista.push({
          id: data.res.rows[i].id,
          descricao: data.res.rows[i].descricao
        });
      }
      successCallback(lista);
    }, (error) => {
      console.log('error: ', JSON.stringify(error.err));
    });
  }

  insert(conta, successCallback) {
    let storage = new Storage(SqlStorage);
    storage.query('INSERT INTO contas(descricao) VALUES (?)', [conta.descricao]).then((data) => {
      conta.id = data.res.insertId;
      successCallback(conta);
    }, (error) => {
      console.log('error: ', JSON.stringify(error.err));
    });
  }

  edit(conta, successCallback) {
    let storage = new Storage(SqlStorage);
    storage.query('UPDATE contas SET descricao=? WHERE id=?', [conta.descricao, conta.id]).then((data) => {
      successCallback(data);
    }, (error) => {
      console.log('error: ', JSON.stringify(error.err));
    });
  }

  delete(conta, successCallback) {
    let storage = new Storage(SqlStorage);
    storage.query('DELETE FROM contas WHERE id=?', [conta.id]).then((data) => {
      successCallback(data);
    }, (error) => {
      console.log('error: ', JSON.stringify(error.err));
    });
  }
}
