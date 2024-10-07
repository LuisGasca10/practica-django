from django.contrib import admin

# Register your models here.
class Task(admin.ModelAdmin):
    list_display = ('title', 'done')
    list_filter = ('done',)
    search_fields = ('title',)