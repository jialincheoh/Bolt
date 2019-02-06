from typing import List
from app.accounts.user import User


class Memo:
    def __init__(
        self,
        to: List[User],
        from_: User,
        subject: str,
        body: str,
        attachments: List[str] = None,
    ):
        self.to = to
        self.from_ = from_
        self.subject = subject
        self.body = body
        self.attachments = attachments

    def __repr__(self):
        return "To: {}\nFrom: {}\nSubject: {}\nBody:\n{}".format(
            ", ".join([user.name for user in self.to]),
            self.from_.name,
            self.subject,
            self.body,
        )
