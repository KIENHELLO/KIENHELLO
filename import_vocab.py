import os
import django
import pandas as pd

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webtienganhn.settings")
django.setup()

from vocabulary.models import VocabularyWord

df = pd.read_csv("vocabulary_500.csv")

for _, row in df.iterrows():
    VocabularyWord.objects.create(
        word=row["word"],
        definition=row["definition"],
        example=row["example"]
    )

print("✅ Done importing vocabulary from CSV.")
