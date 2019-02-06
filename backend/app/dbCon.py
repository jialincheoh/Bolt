import pymysql
from .config import *
import gc

gc.collect()


class dbaseConn:
    def __init__(self):
        self.db = pymysql.connect(MYSQL_HOST, MYSQL_ROOT, MYSQL_PASS, MYSQL_DB)

    def db_conn_close(self):
        self.db.close()
