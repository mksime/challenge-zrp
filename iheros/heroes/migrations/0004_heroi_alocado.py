# Generated by Django 3.0.4 on 2020-03-17 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heroes', '0003_auto_20200315_1100'),
    ]

    operations = [
        migrations.AddField(
            model_name='heroi',
            name='alocado',
            field=models.BooleanField(default=False),
        ),
    ]
