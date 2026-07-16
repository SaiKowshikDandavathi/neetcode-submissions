class Bank:

    def __init__(self, balance: List[int]):
        self.balance = balance
        

    def transfer(self, account1: int, account2: int, money: int) -> bool:
        if self.withdraw(account1, money):
            if self.deposit(account2, money):
                return True
            self.deposit(account1, money)
        return False

        

    def deposit(self, account: int, money: int) -> bool:
        if 1 <= account <= len(self.balance):
            self.balance[account-1] += money
            return True
        return False
        

    def withdraw(self, account: int, money: int) -> bool:
        if 1 <= account <= len(self.balance) and self.balance[account-1] >= money:
            self.balance[account-1] -= money
            return True
        return False




# Your Bank object will be instantiated and called as such:
# obj = Bank(balance)
# param_1 = obj.transfer(account1,account2,money)
# param_2 = obj.deposit(account,money)
# param_3 = obj.withdraw(account,money)

# ============================================================
# REVIEW — Rating: 9/10
#
# Why this isn't perfect:
# - `transfer` correctly rolls back the withdrawal (`self.deposit(account1,
#   money)`) if the deposit into `account2` fails, but that rollback branch
#   is only reachable if `deposit` can fail after a successful `withdraw` —
#   since both accounts are validated against the same `len(self.balance)`
#   bound, this rollback path is effectively dead in practice (deposit only
#   fails on an out-of-range account, which withdraw would have already
#   caught). Not wrong, just slightly over-engineered for the actual
#   constraints.
#
# Areas of improvement:
# - Could simplify `transfer` by validating both account numbers up front
#   rather than relying on the withdraw/deposit rollback dance, though the
#   current version is still correct and safe.
# - All operations are already optimal: O(1) time each, O(1) extra space,
#   correctly validates 1-indexed account bounds and insufficient balance.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# class Bank:
#     def __init__(self, balance: List[int]):
#         self.balance = balance
#
#     def transfer(self, account1: int, account2: int, money: int) -> bool:
#         if not self._valid(account2):
#             return False
#         if self.withdraw(account1, money):
#             self.balance[account2 - 1] += money
#             return True
#         return False
#
#     def deposit(self, account: int, money: int) -> bool:
#         if not self._valid(account):
#             return False
#         self.balance[account - 1] += money
#         return True
#
#     def withdraw(self, account: int, money: int) -> bool:
#         if not self._valid(account) or self.balance[account - 1] < money:
#             return False
#         self.balance[account - 1] -= money
#         return True
#
#     def _valid(self, account: int) -> bool:
#         return 1 <= account <= len(self.balance)