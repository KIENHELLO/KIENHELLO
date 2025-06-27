from django.db import models

class VocabularyWord(models.Model):
    word = models.CharField(max_length=100)
    definition = models.TextField()
    example = models.TextField(blank=True)

    def __str__(self):
        return self.word
