/**
 * Contains the miscellaneous route handlers.
 * @author Nebiyu Daniel <https://github.com/nebadan>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
