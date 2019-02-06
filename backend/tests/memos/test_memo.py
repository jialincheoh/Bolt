from app.memos import Memo
from app.accounts.user import User


def test_memo_repr():
    # Arrange
    user_to = User(1234, "name_to")
    user_from = User(1235, "name_from")
    memo = Memo(
        [user_to], user_from, "Subject", "This is a body.\nIt has three\nlines."
    )

    expected = "To: name_to\nFrom: name_from\nSubject: Subject\nBody:\nThis is a body.\nIt has three\nlines."

    # Act
    memo_repr = repr(memo)

    # Assert
    assert memo_repr == expected
