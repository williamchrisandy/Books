/*
Nama        : William Chrisandy
NIM         : 2301862941
Kelas       : LA03
Mata Kuliah : MOBI6012001 - Web Design
Nama Dosen  : D5022 - Ramot Lubis, S.T., M.Sc.
*/
import 'bootstrap/dist/css/bootstrap.css';
import BookList from './components/BookList.jsx';

function App()
{
  return (
    <div className="min-vh-100 p-5">
      <h1 className="text-center display-3">Books</h1>
      <div className="container">
        <BookList/>
      </div>
    </div>
  );
}

export default App;
