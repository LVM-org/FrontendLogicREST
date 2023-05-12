import CoursesApi from './CoursesApi'
import FilesApi from './FilesApi'
import FoldersApi from './FoldersApi'
import QuizzesApi from './QuizzesApi'

export const StudyApi = {
  course: new CoursesApi(),
  file: new FilesApi(),
  folder: new FoldersApi(),
  quiz: new QuizzesApi(),
}
