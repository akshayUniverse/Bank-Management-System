
const roles = {
    Admin: [
        "view_all_users",
        "edit_user",
        "delete_user",
        "view_transactions",
        "approve_loans"
    ],
    User: [
        "view_own_account",
        "transfer_money",
        "view_own_transacions",
        "apply_loan"
    ],
    Moderator: [
        "view_all_transactions",
        "approve_loan_requests"
    ],
};

module.exports = roles;