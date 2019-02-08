from app.dbase.dbCon import dbaseConn

""" TODO: better db stuffs
CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` varchar(255) COLLATE utf8_bin NOT NULL,
    `name` varchar(255) COLLATE utf8_bin NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin
AUTO_INCREMENT=1 ;
"""


class User:
    def __init__(self, user_id, name):
        self.user_id = user_id
        self.name = name
        self.dbaseConn = dbaseConn()

class UserManagement:
    @staticmethod
    def create_user(user):

        dbcon = dbaseConn()

        with dbcon.db.cursor() as cursor:
            # Create a new record
            sql = "INSERT INTO `users` (`user_id`, `name`) VALUES (%s, %s)"
            cursor.execute(sql, (user.user_id, user.name))

        dbcon.db.commit()

        dbcon.db_conn_close()

    @staticmethod
    def get_user_by_id(user_id):
        dbcon = dbaseConn()

        with dbcon.db.cursor() as cursor:
            # Create a new record
            sql = "SELECT `user_id`, `name` FROM `users` WHERE `user_id`=%s"
            cursor.execute(sql, (user_id,))
            result = cursor.fetchone()

        dbcon.db_conn_close()

        return User(*result)
    @staticmethod
    def delete_user_by_id(user_id):
        dbcon = dbaseConn()
        print(user_id)
        with dbcon.db.cursor() as cursor:
            # delete a user
            sql = "DELETE FROM `users` WHERE `user_id`=%s"
            
            cursor.execute(sql, (user_id))
            result = cursor.fetchone()

        dbcon.db_conn_close()

        return User(*result)