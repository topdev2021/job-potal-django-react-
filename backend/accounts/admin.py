from django.contrib import admin
from .models import UserAccount


# ===============================
# Users Admin Table Display
# ===============================
class UserAccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'type', 'is_active')
    list_display_links = ('id', 'name')
    list_editable = ('is_active',)
    list_per_page = 25


admin.site.register(UserAccount, UserAccountAdmin)
